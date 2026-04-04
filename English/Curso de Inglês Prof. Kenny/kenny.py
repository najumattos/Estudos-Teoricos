import os
import json
import requests

dic = json.loads(open("kenny.json", "r", encoding="utf8").read())

for modulo in dic:
    for lesson in modulo["lessons"]:
        try:
            modulo_name = modulo["name"]
            lesson_name = lesson["name"].replace(": ", " - ").replace("/", "-")

            video = requests.get(lesson["video"]).content

            try:
                pdf = requests.get(lesson["pdf"]).content
                open(f'{modulo_name}/{lesson_name}/conteudo_adicional.pdf', 'wb').write(pdf)
            except:
                pass

            open(f'{modulo_name}/{lesson_name}/aula.mp4', 'wb').write(video)
            open(f'{modulo_name}/{lesson_name}/questoes.json', 'a+').write(json.dumps(lesson["questions"], indent=4))
        except:
            pass
