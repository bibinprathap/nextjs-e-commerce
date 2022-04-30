// react
import React from 'react';

function BlockMap() {
    return (
        <div className="block block-map">
            <div className="block-map__body">
                <iframe
                    title="Google Map"
                    className="first"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.4611484580564!2d55.40134425110501!3d25.322302232747006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5957dad24a97%3A0x14e401044a96eef1!2sBMW%20Maaza%20Signal%20Bus%20Stop!5e0!3m2!1sen!2sae!4v1606541268776!5m2!1sen!2sae"
                    frameBorder="0"
                    scrolling="no"
                    width="50%"
                    marginHeight={0}
                    marginWidth={0}
                />
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7228.6314194605075!2d56.34437267301634!3d25.05728645689668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc45086fea00e943!2sBuhairat%20Kalba%20auto%20spare%20parts!5e0!3m2!1sen!2sae!4v1611402938811!5m2!1sen!2sae"
                    width="50%"
                    className="second"
                    scrolling="no"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                ></iframe>


            </div>
        </div>
    );
}

export default BlockMap;
