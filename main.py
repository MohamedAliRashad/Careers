import yaml
import json
from jinja2 import Template

if __name__ == "__main__":
    index = "index.html"
    with open("config.yaml", "r") as f:
        config = yaml.load(f, Loader=yaml.FullLoader)
        # print(json.dumps(config, indent=4))

    with open("template.html", 'r') as f:
        template = Template(f.read())
    
    with open("index.html", 'w') as f:
        f.write(template.render(**config))