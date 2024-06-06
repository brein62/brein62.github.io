import { useEffect, useState } from "react";
import { Card, CardGroup, Container, Fade, Pagination, Stack } from "react-bootstrap"
import ReactDOM from "react-dom";

export default function EventList({ children, screenWidth } : { children : React.ReactNode[], screenWidth : number }) {

    const [ active, setActive ] = useState(1);

    const [ open, setOpen ] = useState( true );

    const pages = Math.ceil(children.length / 2);

    let items = [];

    const setActiveN = ( value : React.SetStateAction<number> ) => {
        if (value !== active) {
            setOpen(false);
            setTimeout(() => {
                setActive(value);
            }, 150);
        }
    }

    useEffect(() => {
        if (!open) {
            setTimeout(() => {
                setOpen(true);
            }, 150);
        }
    }, [ active ]);

    for (let number = 1; number <= pages; number++) {
      items.push(
        <Pagination.Item key={number} onClick={ () => setActiveN(number) } active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }


    return (
        <Stack gap={2}>
            <CardGroup>
                { (screenWidth >= 576) ?
                <Card style={ { marginTop: "1em", height: "350px" } }>
                    <Fade in={ open }>
                        <div>
                            { children[active * 2 - 2] }
                        </div>
                    </Fade>
                </Card> :
                <Fade in={ open }>
                    <Card style={{ marginTop: "1em" }}>
                        { children[active * 2 - 2] }
                    </Card>
                </Fade>
                }
                { 
                (screenWidth >= 576) ? 
                    ( (active * 2 - 1) === children.length ? 
                        <Card style={{ marginTop: "1em", height: "350px" }}></Card> :
                        <Card style={{ marginTop: "1em", height: "350px" }}>
                            <Fade in={open}>
                                <div>
                                    { children[active * 2 - 1] }
                                </div>
                            </Fade>
                        </Card> )
                    : <Fade in={open}>
                        <Card style={{ marginTop: "1em" }}>
                            { children[active * 2 - 1] }
                        </Card>
                    </Fade>
                }
            </CardGroup>
            <Pagination>
                <Pagination.First onClick={ () => { setActiveN(1); } }/>
                <Pagination.Prev onClick={ () => { if (active > 1) { setActiveN( active - 1 ); } else { setActiveN(pages); } } } />
                { items }
                <Pagination.Next onClick={ () => { if (active < pages) { setActiveN( active + 1 ); } else { setActiveN(1); } } } />
                <Pagination.Last onClick={ () => { setActiveN( pages ); } } />
            </Pagination>
        </Stack>
    )
}