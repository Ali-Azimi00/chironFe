import React from 'react'
import './component.css'

function Bubble(props: any) {

    // const color = props.color;
    // console.log("color: " + color)
    // const [randNum, setRandNum] = useState(100);

    let color = props.color;

    // if (randNum > .5) {
    //     color = props.color;
    // }

    // useEffect(() => {
    //     const interval =setInterval(() => {
    //         setRandNum(Math.random())
    //     }, 500)
    //     return () => clearInterval(interval);

    // }, [])


    return (
        <React.Fragment>
            <span className='p-1 cursor-none' >
                {/* cursor-none */}
                {/* <span className={`bg-red-800 rounded-[100px] bubble`} ></span> */}
                {/* <span className={`bg-green-800 rounded-[100px] bubble`} ></span> */}
                {/* <span className={`bg-blue-800 rounded-[100px] bubble`} ></span> */}
                {/* <span className={`bg-purple-800 rounded-[100px] bubble`} ></span> */}
                {/* <span className={`bg-orange-800 rounded-[100px] bubble`} ></span> */}
                {/* <span className={`bg-yellow-800 rounded-[100px] bubble`} ></span> */}

                <span className={`bg-${color}-800 rounded-[100px] bubble 
                                transition ease-out hover:animate-ping ease-out`} ></span>
            </span>
        </React.Fragment>
    )

}

export default Bubble;