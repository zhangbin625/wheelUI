
const generatorYear = () => {
    let currentYear = new Date().getFullYear()
    let yearList = []
    for (let i = (currentYear - 100); i < (currentYear + 100); i++) {
        let proxyArr = {
            label: `${i}年`,
            value: i
        }
        yearList.push(proxyArr)
    }
    return yearList
}
const years = generatorYear()
const months = [
    {
        label: '01月',
        value: 1,
    },
    {
        label: '02月',
        value: 2,
    },
    {
        label: '03月',
        value: 3,
    },
    {
        label: '04月',
        value: 4,
    },
    {
        label: '05月',
        value: 5,
    },
    {
        label: '06月',
        value: 6,
    },
    {
        label: '07月',
        value: 7,
    },
    {
        label: '08月',
        value: 8,
    },
    {
        label: '09月',
        value: 9,
    },
    {
        label: '10月',
        value: 10,
    },
    {
        label: '11月',
        value: 11,
    },
    {
        label: '12月',
        value: 12,
    },
]
const weeks = [
    {
        label: '第一周',
        value: 1,
    },
    {
        label: '第二周',
        value: 2,
    },
    {
        label: '第三周',
        value: 3,
    },
    {
        label: '第四周',
        value: 4,
    },
    {
        label: '第五周',
        value: 5,
    }
]
export const seasons = [
    years,
    months,
    weeks
];