export function timeSince(timestamp: string): string {
    const now = new Date();
    const then = new Date(timestamp);
    const timeDiff = now.getTime() - then.getTime();
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years}y`;
    }
    if (months > 0) {
        return `${months}mo`;
    }
    if (weeks > 0) {
        return `${weeks}w`;
    }
    if (days > 0) {
        return `${days}d`;
    }
    if (hours > 0) {
        return `${hours}h`;
    }
    if (minutes > 0) {
        return `${minutes}m`;
    }
    return "now";
}

export const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    // Pad single-digit seconds with a leading zero
    const paddedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return `${minutes}:${paddedSeconds}`;
}

export function formatDate(date: string): string {
    const dateParts = date.split("-");
    const monthNumbers: { [key: string]: string } = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    };
    return `${monthNumbers[dateParts[1]]} ${Number(dateParts[2])}, ${dateParts[0]}`;
}