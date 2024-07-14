import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const image = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {scale, fill} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import { brightness, opacity } from "@cloudinary/url-gen/actions/adjust";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "picturecloud7"
    }
  }); 
  const cldImage = cld.image('sample1');
  
  cldImage
  .resize(fill().height(400).width(400).gravity("auto"))
  .overlay(
    source(
      image("check").transformation(
        new Transformation()
        .adjust(opacity(50))
        .adjust(brightness().level(10))
        .resize(scale().width(50))
      )
    ).position(
      new Position().gravity(compass("north_east")).offsetX(20).offsetY(20)
    )
  );

  return (
    <div>
      <AdvancedImage alt="Sample Image" cldImg={cldImage} />
    </div>
  )
}`;
// const video = `import {AdvancedVideo} from '@cloudinary/react';
// import {Cloudinary} from "@cloudinary/url-gen";
// import {Transformation} from "@cloudinary/url-gen";
// import {scale, fill} from "@cloudinary/url-gen/actions/resize";
// import {source} from "@cloudinary/url-gen/actions/overlay";
// import {Position } from "@cloudinary/url-gen/qualifiers/position";
// import {image} from "@cloudinary/url-gen/qualifiers/source";
// import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

// export default function App() {
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: "picturecloud7"
//     }
//   }); 
//   const cldVideo = cld.video('wave');
  
//   cldVideo
//   .resize(fill().height(250).width(250).gravity("auto"))
//     .overlay(
//       source(
//         image("cld-white-logo").transformation(
//           new Transformation().resize(scale().width(50))
//         )
//       ).position(
//         new Position().gravity(compass("north_west")).offsetX(20).offsetY(20)
//       )
//     );

//   return (
//     <div className={"flex"}>
//       <AdvancedVideo controls cldVid={cldVideo} />
//     </div>
//   )
// }`;

export default function OverlayImage() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Text Overlay on Image:
      </h3>{" "}
      <p className={"font-sans text-clddarkblue"}>
        Look for the green check in the upper right corner of the image.
      </p>
      <Experiment
        codeString={`.overlay(
  source(
    image("check").transformation(
      new Transformation()
      .adjust(opacity(10))
      .adjust(brightness().level(50))
      .resize(scale().width(50))
    )
  ).position(
    new Position().gravity(compass("center")).offsetX(90).offsetY(90)
  )"`}
        experimentTitle={
          "Experiment with Different Images, Images Sizes, and Positioning"
        }
        instructions={[
          `Try assets from your own cloud and remember both images need to be in the same cloud`,
          `Modify the compass locations: north, north_east, east, south_east, south, south_west, west, and northwest`,
          `Modify the X,Y offsets? You can use positive and negative values for the x and y offset`,
          `What happens if you remove the Position transformation? What is the default?`,
        ]}
      />
      <SandpackWrapper numberOnPage="1" scriptName={image} />
      {/*       
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Image Overlay on Video:
      </h2>{" "}
      <p className={"font-sans clddarkblue"}>
        Look for the watermark in the upper left or north west corner of the
        video.
      </p>
      <Experiment
        codeString={`.overlay(
  source(
    image("cld-white-logo").transformation(
      new Transformation().resize(scale().width(50))
    )
  ).position(
    new Position().gravity(compass("center")).offsetX(-90).offsetY(-90)
  )
)`}
        experimentTitle={
          "Experiment with Different Images, Images Sizes, and Positioning"
        }
        instructions={[
          `Try assets from your own cloud and remember both images need to be in the same cloud`,
          `Modify the compass locations: north, north_east, east, south_east, south, south_west, west, and northwest`,
          `Modify the X,Y offsets? You can use positive and negative values for the x and y offset`,
          `What happens if you remove the Position transformation? What is the default?`,
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={video} />
       */}
    </div>
  );
}
