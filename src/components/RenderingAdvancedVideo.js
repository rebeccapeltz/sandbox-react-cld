import "../App.css";
import SandpackWrapper from "./SandpackWrapper";
import Experiment from "./experiments";

const singleVideo = `import {AdvancedVideo} from '@cloudinary/react';
import {CloudinaryVideo} from "@cloudinary/url-gen";
export default function App() {
  const cldVideo = new CloudinaryVideo('climbing',{cloudName: "picturecloud7"}); 
  return (
    <div>
      <AdvancedVideo controls height="300" cldVid={cldVideo} />
    </div>
  )
}`;

const multipleVideos = `import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "picturecloud7"
    }
  }); 
  const cldVideo1 = cld.video('climbing');
  const cldVideo2 = cld.video('hike-up');
  return (
    <div>
    <AdvancedVideo controls height="300" cldVid={cldVideo1} />
    <AdvancedVideo controls height="300" cldVid={cldVideo2} />

    </div>
  )
}`;

export default function RenderingAdvancedVideo() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        AdvancedVideo: Delivering Video Elements from a CDN
      </h2>

<Experiment
        codeString={`<video height="300px">
            <source src="https://res.cloudinary.com/cloudinary-training/video/upload/climbing.webm?_a=ATCqVAA0" type="video/webm">
            <source src="https://res.cloudinary.com/cloudinary-training/video/upload/climbing.mp4?_a=ATCqVAA0" type="video/mp4">
            <source src="https://res.cloudinary.com/cloudinary-training/video/upload/climbing.ogv?_a=ATCqVAA0" type="video/ogg">
            </video>`}
        experimentTitle={"Experiment by examining the video element."}   
        notes={`All Cloudinary assets are delivered via CDN. This is a big step in optimization. 
        The AdvancedVideo component creates an HTML5 video elements. You can include HTML5 video
         attributes such as control, to add controls to the video. You only need to specify a 
         Cloudinary Cloud Name and Public ID to create an video object. Once you have that object, 
         you can hand it off to the AdvancedVideo component to render it.`}  
        instructions={[
          `Right click on an video and select "Open Video in New Tab" to see the URL in the browser request`,
          "Open Chrome inspector and look at the video URLs generated by AdvancedVideo",
          "Add or modify HTML5 video attributes like controls, height, loop, muted, width and height",
        ]}
      />

<h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >

        Single Video:
      </h3>

      <p className={"font-sans mt-1 mb-1 text-clddarkblue"}>
        When you are rendering just a single video in your component, you can
        use "CloudinaryVideo" and supply both Cloud Name and Public ID.
      </p>
      <SandpackWrapper numberOnPage="2" scriptName={singleVideo} />
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Multiple Videos:
      </h3>
      <p className={"font-sans mt-1 mb-1 text-clddarkblue"}>
        When you are rendering multiple videos in your component, it is more
        efficient to create a Cloudinary instance, which has a video method that
        will generate new CloudinaryVideo objects for you. You only have to
        specify the Cloud Name once when you create a Cloudinary instance. When
        you create a new video, you specify the Public ID.
      </p>
      <SandpackWrapper numberOnPage="2" scriptName={multipleVideos} />
    </div>
  );
}
