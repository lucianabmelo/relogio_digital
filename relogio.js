function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona um zero à esquerda se for menor que 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Exibe o horário atualizado no HTML
    document.getElementById("clock").textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);


atualizarRelogio();
