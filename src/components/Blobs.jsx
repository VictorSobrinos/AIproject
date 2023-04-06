function Blob({ className = '', ...props }) {
    return (
        <>
            <div {...props} className={`${className} absolute blur-3xl opacity-30  w-96 h-96 
                rounded-3xl`}>
            </div>
        </>
    )
}
export function Blobs() {
    return (
        <>
            <Blob className="bg-purple-600 -top-32 -left-32" />
            <Blob className="bg-purple-200 top-32 left-0" />
        </>
    )
}