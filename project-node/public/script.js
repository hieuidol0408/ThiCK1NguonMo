async function fetchItems() {
    const response = await fetch('/api/items');
    const items = await response.json();
    const list = document.getElementById('itemList');
    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        list.appendChild(li);
    });
}

async function addItem() {
    const name = document.getElementById('itemName').value;
    if (!name) return;
    
    await fetch('/api/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    });
    
    document.getElementById('itemName').value = '';
    fetchItems();
}

fetchItems();
