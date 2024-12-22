import './graphStyles.css'


function Heatmap() {
    let sampleArr= [1,2,3,5,5,72,13,52,83,65,32]

    let loadboxes = () => {
        let list = [];

        for (let i = 0; i < 36; i++) {
            let boxColor="";
            if(i%3==0 || i< 9 || i>25){
                boxColor="tinyboxColor";
            }

            list.push(
                <div key={i + 1} className={"tinybox "+ boxColor}>{i + 1}</div>
            )
        }
        return (
            list
        )

    }


    return (
        <div>
            <div className='mb-12 '>
                <div className={'heatmapContainer ' +
                    'grid ' +
                    'grid-cols-12 ' +
                    'gap-0'}>

                    {loadboxes()}

                </div>
            </div>

            {/* <div className={'heatmapContainer ' +
                'grid ' +
                'grid-cols-12 ' +
                'gap-0'}>

                {loadboxes()}


            </div> */}


            <div>







            </div>

        </div>
    )
}

export default Heatmap;