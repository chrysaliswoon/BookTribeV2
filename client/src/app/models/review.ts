export interface Review {
    email: string
    bookId: string
    comments: string
}

export interface AllReviews {
    bookId: string
    userEmail: string
    title: string
    imageUrl: string
    comments: string
}