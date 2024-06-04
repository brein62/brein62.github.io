import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Stack } from "react-bootstrap";

export default function LinkButton({ href, icon, variant, children } : { href : string, icon : IconDefinition, variant?: string, children : React.ReactNode }) {
    return (
        <Button variant={ variant ?? "primary" } target="_blank" rel="noopener noreferrer" href={ href }>
            <Stack direction="horizontal" gap={2}>
                <span>{ children }</span>
                <FontAwesomeIcon icon={ icon } />
            </Stack>
        </Button>
    )
}