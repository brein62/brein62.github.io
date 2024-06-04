import { faAward } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "./LinkButton";

export default function LinkToAwardButton({ href, children } : { href : string, children : React.ReactNode }) {
    return (
        <LinkButton href={ href } icon={ faAward }>
            { children }
        </LinkButton>
    )
}