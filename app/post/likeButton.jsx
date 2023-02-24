'use client'

export function LikeButton() {
    const handleLikeButton = () => {
        alert('Likeaste el post')
    }
    return (
        <button onClick={handleLikeButton}>
            like
        </button>
    )
};