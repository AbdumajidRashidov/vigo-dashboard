import React from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { useGetLanguage } from "hooks";

import { Button, Fields, Typography } from "components";

import { ReactComponent as AddIcon } from "assets/icons/add-item.svg";

export const FoodList = ({ food, onRemoveFood, onAddFood }) => {
	const { getLanguageValue } = useGetLanguage();

	return (
		<>
			{food.map((product, index) => (
				<div key={index} className="mt_30">
					<div className="d-flex align-items-center justify-content-between mb_20">
						<Typography
							Type="span"
							className="color_brand-blue product__btn"
							text={`${index + 1}-БЛЮДО`}
						/>

						{index !== 0 && (
							<Button
								className="color_primary-red product__btn"
								text="Удалить"
								onClick={(event) => onRemoveFood(index, event)}
							/>
						)}
					</div>

					<div key={index} className="row g-4">
						<div className="col-6">
							<FastField
								name={`foods.${index}.food_id`}
								component={Fields.AsyncSelect}
								label="Блюдо"
								placeholder="Блюдо"
								loadOptionsUrl="/food"
								getOptionLabel={(option) => getLanguageValue(get(option, "title"))}
							/>
						</div>

						<div className="col-6">
							<FastField
								name={`foods.${index}.quantity`}
								component={Fields.InputNumber}
								label="Колличество"
								placeholder="колличество"
							/>
						</div>
					</div>
				</div>
			))}

			<Button className="add-item mt_20 mx_auto" append={<AddIcon />} onClick={onAddFood} />
		</>
	);
};
