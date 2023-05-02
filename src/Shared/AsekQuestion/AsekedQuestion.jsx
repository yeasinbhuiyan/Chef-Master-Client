import React from 'react';

const AsekedQuestion = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-semibold">
                How do I adjust the recipe for dietary restrictions?
                </div>
                <div className="collapse-content">
                    <p className='text-sm font-semibold text-gray-800'> To adjust a recipe for dietary restrictions, substitute ingredients that are compatible with the diet in question. For example, to make a recipe vegan, substitute animal-based products with plant-based alternatives.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-semibold">
                Can I use a slow cooker or pressure cooker for this recipe?
                </div>
                <div className="collapse-content">
                    <p className='text-sm font-semibold text-gray-800'>Yes, you can use a slow cooker or pressure cooker for some recipes. Check the recipe instructions for specific guidelines.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-semibold">
                How long does this recipe take to make?
                </div>
                <div className="collapse-content">
                    <p className='text-sm font-semibold text-gray-800'> The time needed to make a recipe varies depending on the dish and your cooking skill level. Most recipes include an estimated preparation and cooking time, but keep in mind that this can vary.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-semibold">
                How do I store leftovers of this recipe?
                </div>
                <div className="collapse-content">
                    <p className='text-sm font-semibold text-gray-800'>To store leftovers of a recipe, let the food cool to room temperature, then transfer it to an airtight container and store it in the refrigerator. Most cooked food can be stored for up to 3-4 days.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-semibold">
                What equipment do I need to make this recipe?
                </div>
                <div className="collapse-content">
                    <p className='text-sm font-semibold text-gray-800'>The equipment needed for a recipe varies depending on the dish, but most recipes require basic kitchen tools like pots, pans, mixing bowls, and utensils. Check the recipe instructions for specific equipment needs.</p>
                </div>
            </div>


        </div>
    );
};

export default AsekedQuestion;