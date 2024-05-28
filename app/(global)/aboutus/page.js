
export const metadata = {
    title: "About us page",
    description: "Generated with love by me",
};

export default function AboutUsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl">Sobre nosotros!!</h1>
            <span>Fecha: {(new Date()).toDateString()}</span>
        </main>
    )
}