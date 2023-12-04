const GalleryImage = ({ src, alt, className }) => {
    return (
        <img
            className={`relative object-cover ${className}`}
            src={src}
            alt={alt}
        />
    );
};

export default GalleryImage;
