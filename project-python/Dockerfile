FROM python:3.9-slim

# Set working directory
WORKDIR /usr/src/app

# Copy requirements file
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start command (using gunicorn would be better for prod, but app.py is consistent with dev)
CMD ["python", "app.py"]
