import { Row } from "react-bootstrap";

/**
 * Returns a row layout as seen in the Personal Bests section in the Personal page, based on the number of columns.
 * Requires the following props:
 * 
 * - columns: The number of columns in the row layout.
 * - children: The columns (Col[]) in the row layout.
 * 
 * @returns The component representing the row layout, based on the number of columns.
 */
function Rows({ columns, children } : { columns : number, children : React.ReactNode[] }) {
    
    const rows = Math.ceil(children.length / columns);

    const rowComponents = Array(rows).fill(0).map(
        (_, i) => (
            <Row>
                {
                    Array(columns).fill(0).map(
                        (_, j) => children[i * columns + j]
                    )
                }
            </Row>
        )
    );

    return (
        <>
            { rowComponents }
        </>
    );
}

/**
 * Returns a row layout as seen in the Personal Bests section in the Personal page. May contain the following props:
 * 
 * - screenWidth: The width of the screen the row layout is located in.
 * - cutoffs: The screen cutoffs as an array of 5 numbers representing the maximum number of columns when the screen is
 *   [xl, lg, md, sm, xs]. Defaults to [6, 5, 3, 2, 1].
 * - children: The columns (Col[]) in the row layout.
 * 
 * @returns The component representing the row layout.
 */
export default function RowLayout({ screenWidth, cutoffs = [6, 5, 3, 2, 1], children } : { screenWidth : number, cutoffs? : number[], children: React.ReactNode[] }) {

    if (cutoffs.length < 5) cutoffs = [6, 5, 3, 2, 1];

    if (screenWidth >= 1024) {
        return Rows({ columns: cutoffs[0], children: children });
    } else if (screenWidth >= 768) {
        return Rows({ columns: cutoffs[1], children: children });
    } else if (screenWidth >= 576) {
        return Rows({ columns: cutoffs[2], children: children });
    } else if (screenWidth >= 200) {
        return Rows({ columns: cutoffs[3], children: children });
    } else {
        return Rows({ columns: cutoffs[4], children: children });
    }
}