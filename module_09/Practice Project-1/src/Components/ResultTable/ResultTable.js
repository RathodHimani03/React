import classes from  './ResultTable.module.css'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})



const ResultTable = (props) => {

    return (
        <div>
            <table className={classes.result}>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((data) =>

                        <tr>
                            <td>{data.year} </td>
                            <td> {data.yearlyInterest}</td>
                            <td>{formatter.format(data.yearlyContribution)}</td>
                            <td>{formatter.format(data.savingsEndOfYear -
                                props.initialInvestment -
                                data.yearlyContribution * data.year)
                            }</td>
                            <td>{formatter.format(
                                props.initialInvestment +
                                data.yearlyContribution * data.year
                            )}</td>

                        </tr>

                    )}

                </tbody>

            </table>
        </div>
    );

};



export default ResultTable;