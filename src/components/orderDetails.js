import React from 'react';

const OrderDetails = (props) => {
    const filteredData = props.data;
    const titles = props.titles;
    console.log('filteredData ===> ', filteredData);
    console.log('titles ===> ', titles);
    return (
        <div>
            {titles?.forEach((key) => (
                <>
                    <span>
                        {key}
                    </span>
                    <span>
                        {filteredData[key]}
                    </span>
                </>
            ))}
        </div>
    );
};

export default OrderDetails;