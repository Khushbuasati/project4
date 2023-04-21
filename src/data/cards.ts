import WeekendIcon from '@mui/icons-material/Weekend';
import BarChartIcon from '@mui/icons-material/BarChart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import chart_1 from '../assets/images/chart_1.png';
import chart_2 from '../assets/images/chart_2.png';
import chart_3 from '../assets/images/chart_3.png';

export const smallCards = [
    {icon: WeekendIcon, title: 'Booking', value: '281', percent: 55, duration: 'than last week'},
    {icon: BarChartIcon, title: `Today's Users`, value: '2,300', percent: 3, duration: 'than last month'},
    {icon: Inventory2Icon, title: 'Revenue', value: '34k', percent: 1, duration: 'than yesterday'},
    {icon: PersonAddIcon, title: 'Followers', value: '+91', duration: 'Just updated'},
];

export const chartCards = [
    {img: chart_1, title: 'Website Views', desc: 'Last Campaign Performance', duration: 'campaign sent 2 days ago'},
    {img: chart_2, title: 'Daily Sales', desc: 'increase in today sales', duration: 'updated 4 min ago'},
    {img: chart_3, title: 'Completed Taks', desc: 'Last Campaign Performance', duration: 'just updated'},
];