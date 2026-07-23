# Firebase Admin Claims

## Security Posture
The repository retains its Firebase Admin functionality. 

- **Rules**: `firestore.rules` and `storage.rules` dictate access.
- **Authorization**: The current architecture relies on Firebase Custom Claims (e.g., `admin: true`) or document-level auth for writing.
- **Rule of Engagement**: DO NOT delete or bypass the Firebase Admin systems without explicit migration approval. The dashboard remains disconnected from the static public V4 presentation but is preserved as a requirement.
