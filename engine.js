const code = localStorage.getItem("pscaCode");

const stage = document.getElementById("stage");

if (!code) {
    alert("Pscaコードがありません");
}

const lines = code.split("\n");

let i = 0;

while (i < lines.length) {

    let line = lines[i].trim();

    // START
    if (line === "START") {
        i++;
        continue;
    }

    // END
    if (line === "END") {
        break;
    }


    // print()
    if (line.startsWith("print")) {

        let text = line
            .replace('print("', "")
            .replace('")', "");

        const p = document.createElement("p");
        p.textContent = text;

        stage.appendChild(p);
    }


    // alert()
    if (line.startsWith("alert")) {

        let text = line
            .replace('alert("', "")
            .replace('")', "");

        alert(text);
    }


    // BUTTON
    if (line === "BUTTON") {

        i++;

        let name = "";
        let id = "";

        while (i < lines.length && lines[i].trim() !== "") {

            let part = lines[i].trim();

            if (part.startsWith("name")) {
                name = part.split("=")[1].trim().replaceAll('"',"");
            }

            if (part.startsWith("id")) {
                id = part.split("=")[1].trim().replaceAll('"',"");
            }

            i++;
        }


        let button = document.createElement("button");

        button.textContent = name;
        button.id = id;

        stage.appendChild(button);
    }


    i++;
}
