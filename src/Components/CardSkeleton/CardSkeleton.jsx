import React, { useState } from "react";
import ContentLoader from "react-content-loader";

function CardSkeleton({ amount, controls, fullCard }) {

    let skeletonWidth = 300;
    skeletonWidth = document.querySelector(".cardSkeleton")?.clientWidth

    if (!fullCard) {
        return Array.apply(null, { length: amount }).map(() => (
            <ContentLoader
                speed={1.25}
                width={'100%'}
                height={280}
                interval={0.25}
                backgroundColor="#ebebeb"
                foregroundColor="#0066ff00"
                className="cardSkeleton"
                style={{ margin: '0 auto 20px', maxWidth: 350 }}
            >
                <rect x="0" y="0" rx="10" width="100%" height="140" />
                <rect x="0" y="160" rx="10" width="50" height="20" />
                <rect x={skeletonWidth - 100} y="160" rx="5" width="100" height="20" />
                <rect x="0" y="195" rx="5" width="100%" height="20" />
                <rect x="0" y="235" rx="8" width="15" height="20" />
                <rect x="25" y="240" rx="3" width="125" height="12" />
                <rect x={skeletonWidth - 33} y="230" rx="100" width="33" height="33" />
                {controls ? (
                    <rect x={skeletonWidth - 66} y="230" rx="100" width="33" height="33" />
                ) : (
                    ""
                )}
            </ContentLoader>
        ));
    } else {
        return Array.apply(null, { length: amount }).map(() => (
            <ContentLoader
                speed={1.25}
                width="100%"
                height={240}
                interval={0.25}
                backgroundColor="#ebebeb"
                foregroundColor="#0066ff00"
                className="cardSkeleton"
                style={{ marginBottom: 35 }}
            >
                <rect x="30" y="20" rx="10" width="300" height="200" />
                <rect x="346" y="30" rx="5" width="220" height="20" />
                <rect x="575" y="30" rx="10" width="60" height="20" />
                <rect
                    x={skeletonWidth - 90}
                    y="30"
                    rx="2"
                    width="80"
                    height="20"
                />
                <rect x="346" y="70" rx="3" ry="3" width="67" height="11" />
                <rect x="425" y="70" rx="3" ry="3" width="140" height="11" />
                <rect x="400" y="94" rx="3" ry="3" width="140" height="11" />
                <rect x="550" y="94" rx="3" ry="3" width="173" height="11" />
                <rect x="380" y="124" rx="3" ry="3" width="53" height="11" />
                <rect x="440" y="124" rx="3" ry="3" width="72" height="11" />
                <rect x="520" y="124" rx="3" ry="3" width="100" height="11" />
                <rect x="346" y="148" rx="3" ry="3" width="37" height="11" />
                <rect x="390" y="148" rx="3" ry="3" width="90" height="11" />
                <rect x="346" y="190" rx="8" width="15" height="20" />
                <rect x="346" y="192" rx="10" width="80" height="18" />
                <rect
                    x={skeletonWidth - 46}
                    y="185"
                    rx="100"
                    width="33"
                    height="33"
                />
            </ContentLoader>
        ));
    }
}
export default CardSkeleton;
