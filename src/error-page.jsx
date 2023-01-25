import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Désolé, je fais en sorte de réparer cette erreur au plus vite.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}