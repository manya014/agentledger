import hashlib
import json


def generate_hash(report):

    report_string = json.dumps(
        report,
        sort_keys=True
    )

    return hashlib.sha256(
        report_string.encode()
    ).hexdigest()