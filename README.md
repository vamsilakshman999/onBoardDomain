# OnBoard Domain

This repository contains artifacts for the Gym Fees application example.  Zipped
archives of the backend and frontend projects are provided separately.

* `gym-fees-backend/` – Spring Boot multi-module backend project
* `gym-fees-frontend/` – Angular frontend project

Each project includes a README with instructions.

## Splitting into standalone repositories

Run `scripts/split-into-repos.sh` to generate two separate Git repositories with
full history for the backend and frontend. The script will create
`../backend-repo` and `../frontend-repo` directories one level above this
project directory.
