async function runPsca() {

    while (i < lines.length) {

        let line = lines[i].trim();

        if (line === "START") {
            i++;
            continue;
        }

        if (line === "END") {
            break;
        }


        if (line.startsWith("print")) {

            let text = line
                .replace('print("', "")
                .replace('")', "");

            const p = document.createElement("p");
            p.textContent = text;

            stage.appendChild(p);

            // 表示を反映させる
            await new Promise(resolve => setTimeout(resolve, 0));
        }


        if (line.startsWith("wait")) {

            let seconds = Number(
                line.replace("wait ", "")
                    .replace(" seconds", "")
            );

            await new Promise(resolve =>
                setTimeout(resolve, seconds * 1000)
            );
        }


        if (line.startsWith("alert")) {

            let text = line
                .replace('alert("', "")
                .replace('")', "");

            alert(text);
        }


        i++;
    }
}

runPsca();
