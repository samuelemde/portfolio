"use client";

import Link from "next/link";
import FullBleed from "~/components/FullBleed";
import Video from "~/components/Video";
import { useSearchParams } from "next/navigation";
import Header from "~/components/Header";
import { projects } from "~/lib/projects";
import LightBoxImage from "~/components/LightBoxImage";
import mapImage from "@/images/nfn/map2.png";
import Footer from "~/components/Footer";
import { type Image } from "~/lib/types";

type NFNPageProps = {
  isSsrMobile: boolean;
  images: Image[];
};

export default function NFNPage({ isSsrMobile, images }: NFNPageProps) {
  const searchParams = useSearchParams();
  const titleColor = searchParams.get("titleColor");

  return (
    <>
      <Header
        titleColorClass={titleColor}
        initialTitle={"SE"}
        isSsrMobile={isSsrMobile}
      />
      <FullBleed
        src={projects.nfn.image.coverImage}
        title={projects.nfn.title}
        titleColorClass={titleColor}
      />

      <div className="flex flex-col items-center justify-center gap-20 px-8 pb-60 pt-10 lg:px-12">
        {/* ------ Abstract ------*/}
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">Abstract</h2>
          <p className="text-sm italic">
            Bachelor thesis - Computer Science at University of Basel
          </p>
          <p className="pt-4 text-lg tracking-wider">
            “Vehicle-to-vehicle and vehicle-to-infrastructure communication has
            started to become a reality. It allows vehicles to benefit from the
            sensory data of other nearby vehicles and thus improves road safety.
            In order to reduce latency, edge computing is a popular way of
            bringing computational resources closer to the consumers. However,
            in such highly dynamic environments the host-centric approach of
            today’s TCP/IP protocol suite is inadequate. Information Centric
            Networking (ICN), on the other hand, is a network paradigm
            particularly well suited for such scenarios. Other than the
            end-to-end approach of TCP/IP, ICN does not address hosts, but
            rather named data. In this way, content can be retrieved by name
            regardless of its location. As an extension, Named Function
            Networking (NFN) allows computations to be executed at any node in
            the network without additional infrastructure (like proxies). This
            makes it a promising candidate for distributed computations such as
            edge computing.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            In connected vehicle environments, the contact time between vehicles
            and network access points is limited. This poses a challenge when
            uploading data, since connection times could be too short for an
            upload to finish. Therefore, strategies are needed to continue
            uploads by enabling nodes in the network to share already uploaded
            data chunks.”
          </p>
          <p className="pt-4 text-lg tracking-wider">
            In this thesis I investigated strategies for handling interrupted
            data uploads in highly dynamic and mobile environments using the
            principles of ICN and NFN. Furthermore, I explored demo applications
            in which the camera data from multiple vehicles are combined to
            create a detailed map of the road ahead.
          </p>
          <p className="text- pt-4 text-sm italic">
            Publication:{" "}
            <Link
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://ieeexplore.ieee.org/document/9024397"
            >
              Data Upload in Mobile Edge Computing over ICN
              <br />
            </Link>
            IEEE Globecom2019 Workshop on Information-Centric Edge Computing
            (2019)
            <br /> Christopher Scherb, Samuel Emde, Claudio Marxer and Christian
            Tschudin
          </p>
        </div>
        <Video
          videoId="ce8bo7LgeYo"
          title="Demo for mobile data upload for nfn edge computing"
        />
        {/* ------ Example ------*/}
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">
            Example: Mobile Data Upload For NFN Edge Computing
          </h2>
          <p className="pt-4 text-lg tracking-wider">
            This example demonstrates the possibility of “looking around the
            corner” by combining the dash cam footage from multiple vehicles.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            Image #1 is taken from a vehicle approaching an intersection. Due to
            the buildings obstructing its view, it cannot see whether there are
            any objects on the road when turning left. Image #2 offers a view
            from another vehicle around that exact corner which we can use to
            gather additional information. Using machine learning, we can detect
            relevant objects in the frame and generate a disparity map, which we
            can use the get depth information from a 2D image. Together with the
            coordinates of the vehicles themselves, this data can be combined
            into a birds-eye view and printed on a map.
          </p>
        </div>
        {/* ------ Images ------*/}
        <div className="grid h-full w-full grid-cols-1 gap-12 gap-y-20 lg:grid-cols-2">
          {images.map((image) => (
            <LightBoxImage
              key={image.alt}
              src={image.src}
              alt={image.alt}
              sizes={"(min-width: 1024px) 50vw, 100vw"}
              renderAlt={true}
            />
          ))}
        </div>
        <div
          className={
            "flex w-full flex-col items-center justify-center lg:w-2/3"
          }
        >
          <LightBoxImage
            src={mapImage}
            alt={"Resulting map with all the detected objects"}
            sizes={"(min-width: 768px) 66vw, 100vw"}
            renderAlt={true}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
