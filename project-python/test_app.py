import pytest
import os
from app import app, init_db, DB_NAME

@pytest.fixture
def client():
    app.config['TESTING'] = True
    # Use a separate test database or clean up
    if os.path.exists(DB_NAME):
        os.remove(DB_NAME)
    init_db()
    
    with app.test_client() as client:
        yield client
    
    if os.path.exists(DB_NAME):
        os.remove(DB_NAME)

def test_get_items(client):
    rv = client.get('/api/items')
    assert rv.status_code == 200
    assert rv.json == []

def test_add_item(client):
    rv = client.post('/api/items', json={'name': 'Test Item'})
    assert rv.status_code == 201
    assert rv.json['name'] == 'Test Item'
