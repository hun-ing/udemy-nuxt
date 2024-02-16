export default defineNuxtPlugin(async (nuxtApp) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const dateFilter = value => {
        return formatDate(value);
    };

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const formattedDate = day + ". " + months[month] + " " + year;
        return formattedDate;
    }

    nuxtApp.provide('date', dateFilter);
})

