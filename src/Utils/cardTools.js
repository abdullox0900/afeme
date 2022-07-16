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
    setAdvertTypeLink,
    setAdvertAddress,
    setAdvertCity
) {

    function numberFormatter(numb, type, currency) {
        var formatter = new Intl.NumberFormat(type, {
            style: "currency",
            currency: currency,
        });
        return formatter.format(numb);
    }

    useEffect(() => {
        if (data.hasOwnProperty("id")) {
            if (currency == "usd") {
                setPrice(numberFormatter(data.price_usd, 'en-US', "USD"));
            } else if (currency == "sum" && data.price_som != null) {
                setPrice(
                    numberFormatter(data.price_som, "uz-UZ", "UZS")
                );
            }

            setAdvertLink(`/advert/${data.id}`);
            setAdvertTypeLink(`/adverts?htype=${data.htype_id.id}`)

            if (lang == "uz") {
                setAdvertType(data?.htype_id?.name_uz);
                setAdvertAddress(data?.region_id?.name_uz);
                // setAdvertCity(data?.city_id?.name_uz);

                setAdvertTitle(
                    `${data.room} xonali ${data.htype_id?.name_uz} ${data?.sale_id.id == 6 ? "Sotiladi" : "Ijaraga beriladi"}`
                );
            } else if (lang == "ru") {
                setAdvertType(data?.htype_id?.name_ru);
                setAdvertAddress(data?.region_id?.name_ru);
                // setAdvertCity(data?.city_id?.name_ru);

                setAdvertTitle(
                    data.sale_id?.id == 6 ? `Продается ${data.room} комнатный ${data.htype_id?.name_ru}` : `${data.room} комнатный ${data.htype_id?.name_ru} в аренду`
                );
            } else {
                setAdvertType(data?.htype_id?.name_en);
                setAdvertAddress(data?.region_id?.name_en);
                // setAdvertCity(data?.city_id?.name_en);

                setAdvertTitle(
                    `${data.room}-room ${data.htype_id?.name_en} for ${data?.sale_id.name_en}`
                );
            }

            setAdvertTypeImg(
                `https://ali98.uz/public/admin2/categories/${data?.htype_id?.icon}`
            );
        }
    }, [data, currency, lang]);
}
export default CardTools
