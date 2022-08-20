gcloud projects get-iam-policy project_id 
gcloud projects set-iam-policy project_id new_file_name.yaml


setting a member role

- members: 
  - user: user@mail.com
  roles: role/viewer

using Shell

gcloud projects add-iam-policy-bindings project_id --member user: user@mail.com --roles: role/storage.admin

account_for_project1@dotted-ranger-358019.iam.gserviceaccount.com