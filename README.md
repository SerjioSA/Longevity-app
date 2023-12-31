# Task-Frontend-1

You need to create .env file in your project root with this fields:
```
SECRET_KEY = <password-hash-key>
```
You can generate  password-hash-key [here](https://emn178.github.io/online-tools/sha256.html).
### How to launch frontend

Install [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

Go to /frontend

Run those commands: 

```
yarn
```

```
yarn dev
```
### How to launch backend

Go to /backend

Create a virtual environment:

```
python3 -m venv venv
```

* If you use Linux/macOS

    ```
    source venv/bin/activate
    ```

* if you use windows

    ```
    source venv/scripts/activate
    ```


Install requirements from  requirements.txt:

```
python3 -m pip install --upgrade pip
```

```
pip install -r requirements.txt
```

Launch backend
```
uvicorn main:app --reload
```
