function solve(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = input.reduce((acc, curr) => {
        let [destination, price, status] = curr.split('|').map((x) => x.trim());
        price = Number(price);

        const ticket = new Ticket(destination, price, status);
        acc.push(ticket);

        return acc;
    }, []);

    if (criteria === 'destination') {
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria === 'price') {
        tickets.sort((a, b) => a.price - b.price);
    } else if (criteria === 'status') {
        tickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return tickets;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));