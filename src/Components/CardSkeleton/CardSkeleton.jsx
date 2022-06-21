import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

function CardSkeleton({ amount, controls }) {

    return Array.apply(null, { length: amount }).map(() => {
        return (
            <ContentLoader
                speed={1.25}
                width={300}
                height={280}
                interval={0.25}
                viewBox="0 0 300 280"
                backgroundColor="#ebebeb"
                foregroundColor="#0066ff00"
            >
                <rect x="0" y="0" rx="10" width="100%" height="140" />
                <rect x="0" y="160" rx="10" width="50" height="20" />
                <rect x="196" y="160" rx="5" width="100" height="20" />
                <rect x="0" y="195" rx="5" width="100%" height="20" />
                <rect x="0" y="235" rx="8" width="15" height="20" />
                <rect x="25" y="240" rx="3" width="125" height="12" />
                <rect x="260" y="230" rx="100" width="33" height="33" />
                {controls ? <rect x="220" y="230" rx="100" width="33" height="33" /> : ''}
            </ContentLoader>
        );
    });
}
export default CardSkeleton;
