import { logDOM } from "@testing-library/react";
import React, { useState, useEffect, useContext } from "react";

function CardTools(
    data,
    lang,
    currency,
    setPrice,
    setAdvertTitle,
    setAdvertLink,
    setAdvertType,
    setAdvertTypeImg,
    setAdvertAddress,
    setAdvertCity
) {

    function numberFormatter(numb) {
        var formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });
        return formatter.format(numb);
    }

    useEffect(() => {
        if (data.hasOwnProperty("id")) {
            if (currency == "usd") {
                setPrice(numberFormatter(data.price_usd));
            } else if (currency == "sum" && data.price_som != null) {
                setPrice(
                    data.price_som
                        .toLocaleString() + " so'm"
                );
            }

            setAdvertLink(`/advert/${data.id}`);

            if (lang == "uz") {
                setAdvertType(data?.htype_id?.name_uz);
                setAdvertAddress(data?.region_id?.name_uz);
                setAdvertCity(data?.city_id?.name_uz);

                setAdvertTitle(
                    `${data.sale_id?.name_uz + 'ga'} ${data.room} xonali ${data.htype_id?.name_uz} sotiladi`
                );
            } else if (lang == "ru") {
                setAdvertType(data?.htype_id?.name_ru);
                setAdvertAddress(data?.region_id?.name_ru);
                setAdvertCity(data?.city_id?.name_ru);

                setAdvertTitle(
                    `${data.room}-комнатная ${data.htype_id?.name_ru} в ${data.sale_id?.name_ru} на продажу`
                );
            } else {
                setAdvertType(data?.htype_id?.name_en);
                setAdvertAddress(data?.region_id?.name_en);
                setAdvertCity(data?.city_id?.name_en);

                setAdvertTitle(
                    `${data.room}-room ${data.htype_id?.name_en} for ${data.sale_id?.name_en} Sale`
                );
            }

            setAdvertTypeImg(
                `https://ali98.uz/public/admin2/categories/${data?.htype_id?.icon}`
            );
        }
    }, [data, currency, lang]);
}
export default CardTools
