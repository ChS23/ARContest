export default function Page({ params }: { params: { id: string }})
{
    return (
        <div>
            <h1>Novel: {params.id}</h1>
        </div>
    )
}
