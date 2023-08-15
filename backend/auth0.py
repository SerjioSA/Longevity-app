from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2AuthorizationCodeBearer
from jose import jwt
from pydantic import BaseModel

app = FastAPI()

oauth2_scheme = OAuth2AuthorizationCodeBearer(
    authorizationUrl="https://YOUR_DOMAIN/authorize",
    tokenUrl="https://YOUR_DOMAIN/oauth/token",
)

class User(BaseModel):
    name: str
    email: str

async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, "YOUR_SECRET_KEY")
        user = User(name=payload["name"], email=payload["email"])
        return user
    except:
        raise HTTPException(status_code=400, detail="Invalid token")

@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user