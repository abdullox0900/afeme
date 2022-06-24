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
    console.log(data);

    useEffect(() => {
        if (data.hasOwnProperty("id")) {
            if (currency == "usd") {
                setPrice(numberFormatter(data.price_usd));
            } else if (currency == "sum") {
                setPrice(
                    data.price_som
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm"
                );
            }
            setAdvertTitle(
                `Ijaraga ${data.room} xonali ${data.htype_id?.name_uz} sotiladi`
            );

            setAdvertLink(`/advert/${data.id}`);

            if (lang == "uz") {
                setAdvertType(data?.htype_id?.name_uz);
                setAdvertAddress(data?.region_id?.name_uz);
                setAdvertCity(data?.city_id?.name_uz);
            } else if (lang == "ru") {
                setAdvertType(data?.htype_id?.name_ru);
                setAdvertAddress(data?.region_id?.name_ru);
                setAdvertCity(data?.city_id?.name_ru);
            } else {
                setAdvertType(data?.htype_id?.name_en);
                setAdvertAddress(data?.region_id?.name_en);
                setAdvertCity(data?.city_id?.name_en);
            }

            setAdvertTypeImg(
                `https://ali98.uz/public/admin2/categories/${data?.htype_id?.icon}`
            );
        }
    }, [data, currency, lang]);
}
export default CardTools
