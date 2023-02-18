import Image from 'next/image'
import diagram from '../../public/images/ArchitechtureDiagram.png'
import timeline from '../../public/images/Timeline.png'

const About = () => {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <div className="nes-container with-title is-centered" id="homeContainer">
                            <p className="title">Who Are We?</p>
                            <p>Welcome To Mario Nexus. Our Goal is to Utilize Reinforcement learning to beat mario with fast speeds and high scores. </p> 
                        </div>
                    </td>
                        <div className="nes-container is-rounded is-dark" id="homeContainer2">
                            <p className="title">How Our System Functions</p>
                            <p>We use a distributive computation network that is configured with a desktop application that casts fragmented data to be assembled and optimized. </p>
                        </div>
                    <td>

                    </td>
                </tr>
            </table>
            <div className="nes-container" id-="homeContainer">
                <p className="title">Architechture For Piggy Back Method</p>
                <table>
                    <tr>
                        <td>
                            <Image className='Diagram' src={diagram} alt="" width={800} ></Image>
                        </td>
                        <td>
                            <Image className='Timeline' src={timeline} alt="" width={800} ></Image>
                        </td>
                    </tr>
                </table>
                
                
            </div>
        </div>
    );
}
 
export default About;