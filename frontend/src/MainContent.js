import React from "react";

export default function MainContent(props) {

    const list = props.list

    // const [funFactResponse, setFunFactResponse] = useState({
    //     funList: props.list.funList, error: props.list.error, loading: props.list.loading
    // })

    console.log('My List', list)

    return (<div className={'main-content'}>
        <h1>Fun fact about React</h1>

        <ul>

            {list &&

                list.map(item =>
                    <li>{item}</li>
                )

            }


            {/*<li>Was released in 2013</li>*/}
            {/*<li>Was originally created by JORDAN WALKE</li>*/}
            {/*<li>Has well over 100k starts on GitHub</li>*/}
            {/*<li>It is maintained by Facebook</li>*/}
            {/*<li>Power thousands of enterprise apps, including mobile apps</li>*/}

        </ul>
    </div>)

}