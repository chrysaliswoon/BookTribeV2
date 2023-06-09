package vttp.nus.iss.server.repository;

import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;


@Repository
public class ImageRepository {

    private Logger logger = Logger.getLogger(ImageRepository.class.getName());

	@Value("${spaces.bucket}")
	private String spacesBucket;

	@Value("${spaces.endpoint.url}")
	private String spacesEndpointUrl;

	//
	@Autowired
	private AmazonS3 s3;

	public String upload(MultipartFile profileImg) {

		ObjectMetadata metadata = new ObjectMetadata();
		metadata.setContentType(profileImg.getContentType());
		metadata.setContentLength(profileImg.getSize());

		String key = UUID.randomUUID().toString().substring(0, 8);

		try {
			PutObjectRequest putReq = new PutObjectRequest(spacesBucket
					, key, profileImg.getInputStream(), metadata);
			putReq.withCannedAcl(CannedAccessControlList.PublicRead);
			s3.putObject(putReq);
		} catch (Exception ex) {
			logger.log(Level.WARNING, "Put S3", ex);
		}

		String imageUrl = "https://%s.%s/%s"
				.formatted(spacesBucket, spacesEndpointUrl, key);
		
		return imageUrl;
    }
}
