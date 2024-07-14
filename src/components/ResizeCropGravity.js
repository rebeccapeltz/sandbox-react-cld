import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryAdvancedVideo = `import {AdvancedVideo} from '@cloudinary/react';
import {CloudinaryVideo} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const video = new CloudinaryVideo('snow',{cloudName:'picturecloud7'});
video.resize(fill().width(244).height(400).gravity("auto"));
export default function App() {
  return (
    <div className="App">
      <AdvancedVideo cldVid={video} controls cldPoster="auto" />
    </div>
  );
}
`;

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function App() {
  const image = new CloudinaryImage('sample1',{cloudName:'picturecloud7'});

  image.resize(fill().width(400).height(400).gravity("auto"));
  return (
    <div>
      <AdvancedImage cldImg={image} />
    </div>
  )
}
`;

export default function ResizeCropGravity() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Image Resize/Crop with Gravity (using fill crop):
      </h3>
      <Experiment
        codeString={`image.resize(fill().width(400).height(400));`}
        experimentTitle={
          "Experiment by removing gravity from the transformation."
        }
        instructions={[
          `Remove gravity from the image tranformation`,
          "View the image with and without gravity and note the differences",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryAdvancedImage} />

      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Video Resize/Crop with Gravity (using fill crop):
      </h3>
      <Experiment
        codeString={`video.resize(fill().width(244).height(400));`}
        experimentTitle={
          "Experiment by removing gravity from the transformation."
        }
        instructions={[
          `Remove gravity from the video tranformation`,
          "View the video with and without gravity and note the differences",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryAdvancedVideo} />
    </div>
  );
}
