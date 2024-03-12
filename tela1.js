//https://drive.google.com/file/d/1eXCgp2XjVbzBs9_PAnCkq1nBL35dZvWx/view?usp=sharing

function tela(area){
	let volta = document.getElementById('especifico');
	let volta2 = document.getElementById('especifico2');
	let volta3 = document.getElementById('especifico3');
	let volta4 = document.getElementById('especifico4');
	let volta5 = document.getElementById('especifico5');
	let volta6 = document.getElementById('especifico6');
	let volta7 = document.getElementById('especifico7');
	let volta8 = document.getElementById('especifico8');
	let volta9 = document.getElementById('especifico9');
	let volta10 = document.getElementById('especifico10');
	switch(area)
	{
	case 1:
		volta.innerHTML= " <ul> <li>Administração Pública</li> <li>Agronegócios</li> <li>Biblioteconomia</li> <li>Ciências Atuariais</li> <li>Ciências Contábeis</li> <li>Comércio Exterior</li> <li>Economia</li> <li>Gestão Ambiental</li> <li>Gestão Comercial</li> <li>Gestão de Recursos Humanos</li> <li>Gestão Financeira</li> <li>Logística</li> <li>Negócios Imobiliários</li> <li>Processos Gerenciais</li> <li>Relações Internacionais</li> <li>Secretariado</li> <li>Segurança do Trabalho</li> </ul> ";
		document.getElementById('especifico').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico').className ="invisivel";
			clicou=0;
		}
	break;
	case 2:
		volta2.innerHTML= " <ul>  <li>Antropologia</li> <li>Ciências Políticas</li> <li>Ciências Sociais</li> <li>Filosofia</li> <li>Serviço Social</li> <li>Teologia</li> </ul>";
		document.getElementById('especifico2').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico2').className ="invisivel";
			clicou=0;
		}
	break;
	case 3:
		volta3.innerHTML= " <ul> <li> Arquivologia</li> <li>Comunicação Social</li> <li>Jornalismo</li> <li>Multimídia</li> <li>Publicidade e Propaganda</li> <li>Rádio e TV</li> <li>Relações Públicas</li> </ul>";
		document.getElementById('especifico3').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico3').className ="invisivel";
			clicou=0;
		}
	break;
	case 4:
		volta4.innerHTML= " <ul> <li>Artes Cênicas</li> <li>Artes Plásticas</li> <li>Artes Visuais</li> <li>Cinema</li> <li>Dança</li> <li>Desenho Industrial</li> <li>Design de Games</li> <li>Design Gráfico</li> <li>Fotografia</li> <li>Moda</li> <li>Música</li> <li>Teatro</li> </ul>";
		document.getElementById('especifico4').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico4').className ="invisivel";
			clicou=0;
		}
	break;
	case 5:
		volta5.innerHTML= " <ul> <li>Direito</li>";
		document.getElementById('especifico5').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico5').className ="invisivel";
			clicou=0;
		}
	break;
	case 6:
		volta6.innerHTML= " <ul> <li>Ciências Naturais</li> <li>Física</li> <li>Geografia</li> <li>Letras</li> <li>Matemática</li> <li>Pedagogia</li> </ul>";
		document.getElementById('especifico6').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico6').className ="invisivel";
			clicou=0;
		}
	break;
	case 7:
		volta7.innerHTML= " <ul>  <li>Agronomia</li> <li>Arqueologia</li> <li>Astronomia</li> <li>Ciências Ambientais</li> <li>Ciências Exatas</li> <li>Engenharia Aeronáutica</li> <li>Engenharia Aerospacial</li> <li>Engenharia Agrícola</li> <li>Engenharia Ambiental</li> <li>Engenharia Biomédica</li> <li>Engenharia Civil</li> <li>Engenharia de Agrimensura</li> <li>Engenharia de Alimentos</li> <li>Engenharia de Controle e Automação</li> <li>Engenharia de Energia</li> <li>Engenharia de Materiais</li> <li>Engenharia de Minas</li> <li>Engenharia de Pesca</li> <li>Engenharia de Petróleo</li> <li>Engenharia de Produção</li> <li>Engenharia Elétrica</li> <li>Engenharia Florestal</li> <li>Engenharia Mecânica</li> <li>Engenharia Mecatrônica</li> <li>Engenharia Metalúrgica</li> <li>Engenharia Naval</li> <li>Engenharia Nuclear</li> <li>Engenharia Química</li> <li>Engenharia de Telecomunicações</li> <li>Geologia</li> <li>Meteorologia</li> <li>Oceanografia</li> </ul>";
		document.getElementById('especifico7').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico7').className ="invisivel";
			clicou=0;
		}
	break;
	case 8:
		volta8.innerHTML= " <ul>  <li>Ciência da Computação</li> <li>Engenharia da Computação</li> <li>Sistemas de Informação</li> <li>Tecnologia da Informação</li> </ul>";
		document.getElementById('especifico8').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico8').className ="invisivel";
			clicou=0;			
		}
	break;
	case 9:
		volta9.innerHTML= " <ul>  <li>Biologia</li> <li>Biomedicina</li> <li>Biotecnologia</li> <li>Ciências Biológicas</li> <li>Educação Física</li> <li>Enfermagem</li> <li>Estética</li> <li>Farmácia</li> <li>Fisioterapia</li> <li>Medicina</li> </ul>";
		document.getElementById('especifico9').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico9').className ="invisivel";
			clicou=0;
		}
	break;
	case 10:
		volta10.innerHTML= " <ul>  <li>Gastronomia</li> <li>Hotelaria e Turismo</li> </ul>";
		document.getElementById('especifico10').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('especifico10').className ="invisivel";
			clicou=0;
		}
	break;
	}
}


var clicou = 0;
function faculdade(area){
	let facul = document.getElementById('facul'); 
	let facul2 = document.getElementById('facul2');
	let facul3 = document.getElementById('facul3');
	let facul4 = document.getElementById('facul4');
	let facul5 = document.getElementById('facul5');
	let facul6 = document.getElementById('facul6');
	let facul7 = document.getElementById('facul7');
	let facul8 = document.getElementById('facul8');
	let facul9 = document.getElementById('facul9');
	let facu20 = document.getElementById('facu20');
	let facu21 = document.getElementById('facu21');
	let facu22 = document.getElementById('facu22');
	
	switch(area)
	{
	case 1:
		facul.innerHTML= " <ul> <li>Administração</li> <li>Análise e Desenvolvimento de Sistemas</li> <li>Arquitetura e Urbanismo</li> <li>Biomedicina</li> <li>Ciência e Tecnologia em Alimentos</li> <li>Agronomia</li> <li>Ciências Biológicas</li> <li>Ciências Contábeis</li> <li>Design Gráfico</li> <li>Direito</li> <li>Educação Física</li> <li>Enfermagem</li> <li>Engenharia Ambiental e Sanitária</li> <li>Engenharia Civil</li> <li>Engenharia de Computação</li> <li>Engenharia de Produção/Engenharia Industrial</li> <li>Engenharia Elétrica</li> <li>Estética e Cosmética</li> <li>Farmácia</li> <li>Fisioterapia</li> <li>Gastronomia</li> <li>Gestão Ambiental</li> <li>Gestão da Qualidade</li> <li>Gestão Financeira</li> <li>Hotelaria</li> <li>Jornalismo</li> <li>Medicina Veterinária</li> <li>Nutrição</li> <li>Papel e Celulose</li> <li>Pedagogia</li> <li>Processos Gerenciais</li> <li>Tecnologia em Processos Químicos</li> <li>Tecnologia em Produção Sucroalcooleira</li> <li>Psicologia</li> <li>Publicidade e Propaganda</li> <li>Tecnologia em Radiologia</li> <li>Recursos Humanos</li> <li>Serviço Social</li> <li>Sistemas para Internet</li> </ul> ";
		document.getElementById('facul').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('facul').className ="invisivel";
			clicou=0;
		}
	break;

	case 2: 
		facul2.innerHTML= " <ul> <li>Administração</li> <li>Ciências Contábeis</li> <li>Educação Física</li> <li>Enfermagem</li> <li>Fisioterapia</li> <li>História</li> </ul> ";
		document.getElementById('facul2').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('facul2').className ="invisivel";
			clicou=0;
		}
	break;

	case 3:
		facul3.innerHTML= " <ul> <li>Administração</li> <li>Ciências Contábeis</li> <li>Direito</li> <li>Pedagogia</li> </ul> ";
		document.getElementById('facul3').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('facul3').className ="invisivel";
			clicou=0;
		}
	break;

	case 4:
		facul4.innerHTML= " <ul> <li>Administração</li> <li>Biblioteconomia</li> <li>Educação Física</li> <li>Pedagogia</li> </ul> ";
		document.getElementById('facul4').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('facul4').className ="invisivel";
			clicou=0;
		}
	break;

	case 5:
		facul5.innerHTML= " <ul> <li>Agronegócios</li> <li>Análise e Desenvolvimento de Sistemas</li> <li>Automação Industrial</li> <li>Ciência e Tecnologia em Alimentos</li> <li>Ciências Agrárias</li> <li>Engenharia de Pesca</li> <li>Química</li> <li>Sistemas para Internet</li> </ul> ";
		document.getElementById('facul5').className ="visivel";
		clicou++;
		if(clicou== 2){
			document.getElementById('facul5').className ="invisivel";
			clicou=0;
		}
	break;

	case 6:
	facul6.innerHTML= " <ul> <li>Administração</li> <li>Artes Visuais</li> <li>Agronomia</li> <li>Ciências Biológicas</li> <li>Ciências Contábeis</li> <li>Direito</li> <li>Educação Física</li> <li>Pedagogia</li> </ul> ";
	document.getElementById('facul6').className ="visivel";
	clicou++;
	if(clicou== 2){
			document.getElementById('facul6').className ="invisivel";
			clicou=0;
		}
	break;

	case 7:
	facul7.innerHTML= " <ul> <li>Administração</li> <li>Análise e Desenvolvimento de Sistemas</li> <li>Arquitetura e Urbanismo</li> <li>Agronomia</li> <li>Ciências Biológicas</li> <li>Ciências Contábeis</li> <li>Design</li> <li>Direito</li> <li>Educação Física</li> <li>Enfermagem</li> <li>Engenharia Ambiental e Sanitária</li> <li>Engenharia Civil</li> <li>Engenharia de Computação</li> <li>Engenharia de Controle e Automação</li> <li>Engenharia Elétrica</li> <li>Engenharia Mecânica</li> <li>Farmácia</li> <li>Filosofia</li> <li>Fisioterapia</li> <li>História</li> <li>Jornalismo</li> <li>Letras</li> <li>Medicina Veterinária</li> <li>Nutrição</li> <li>Pedagogia</li> <li>Psicologia</li> <li>Publicidade e Propaganda</li> <li>Serviço Social</li> <li>Teologia</li> <li>Zootecnia</li> </ul> ";
	document.getElementById('facul7').className ="visivel";
	clicou++;
	if(clicou== 2){
			document.getElementById('facul7').className ="invisivel";
			clicou=0;
		}
	break;

	case 8:
	facul8.innerHTML= " <ul> <li>Administração</li> <li>Agroecologia</li> <li>Artes Cênicas e Dança</li> <li>Ciência e Tecnologia em Alimentos</li> <li>Agronomia</li> <li> Ciências Biológicas</li> <li>Ciências Contábeis</li> <li>Ciências da Computação</li> <li>Ciências Sociais</li> <li>Direito</li> <li>Educação Física</li> <li>Enfermagem</li> <li>Engenharia Ambiental</li> <li>Engenharia de Alimentos</li> <li>Engenharia Física</li> <li>Engenharia Florestal</li> <li>Física</li> <li>Geografia</li> <li>Gestão Ambiental</li> <li>História</li> <li>Letras</li> <li>Letras - Português - Espanhol</li> <li>Matemática</li> <li>Medicina</li> <li>Pedagogia</li> <li>Produção Sucroalcooleira</li> <li>Química</li> <li>Química Industrial</li> <li>Sistemas de Informação</li> <li>Turismo</li> <li>Zootecnia</li> </ul> ";
	document.getElementById('facul8').className ="visivel";
	clicou++;
	if(clicou== 2){
			document.getElementById('facul8').className ="invisivel";
			clicou=0;
		}
	break;

	case 9:
	facul9.innerHTML= " <ul> <li>Engenharia de Energia</li> <li>Administração</li> <li>Artes Cênicas</li> <li>Biotecnologia</li> <li>Agronomia</li> <li>Ciências Biológicas</li> <li>Ciências Contábeis</li> <li>Ciências Sociais</li> <li>Direito</li> <li>Ciências Econômicas</li> <li>Educação Física</li> <li>Engenharia Agrícola</li> <li>Engenharia Civil</li> <li>Engenharia de Alimentos</li> <li>Engenharia de Aquicultura</li> <li>Engenharia de Computação</li> <li>Engenharia de Produção (Engenharia Industrial)</li> <li>Engenharia Mecânica</li> <li>Física</li> <li>Geografia</li> <li>Gestão Ambiental</li> <li>História</li> <li>Letras</li> <li>Matemática</li> <li>Medicina</li> <li>Nutrição</li> <li>Pedagogia</li> <li>Psicologia</li> <li>Química</li> <li>Relações Internacionais</li> <li>Sistemas de Informação</li> <li>Zootecnia</li> </ul> ";
	document.getElementById('facul9').className ="visivel";
	clicou++;
	if(clicou== 2){
			document.getElementById('facul9').className ="invisivel";
			clicou=0;
		}
	break;

	case 10:
	facu20.innerHTML= " <ul> <li>Administração</li> <li>Análise e Desenvolvimento de Sistemas</li> <li>Arquitetura e Urbanismo</li> <li>Artes Visuais</li> <li>Ciência e Tecnologia em Alimentos</li> <li>Ciências Agrárias</li> <li>Ciências Biológicas</li> <li>Ciências Contábeis</li> <li>Ciências da Computação</li> <li>Ciências Sociais</li> <li>Construção de Edifícios</li> <li>Direito</li> <li>Economia</li> <li>Educação do Campo</li> <li>Educação Física</li> <li>Eletrotécnica Industrial</li> <li>Enfermagem</li> <li>Engenharia Ambiental</li> <li>Engenharia Civil</li> <li>Engenharia de Computação</li> <li>Engenharia de Produção (Engenharia Industrial)</li> <li>Engenharia de Software</li> <li>Engenharia Elétrica</li> <li>Engenharia Florestal</li> <li>Física</li> <li>Farmácia</li> <li>Filosofia</li> <li>Fisioterapia</li> <li>Geografia</li> <li>Gestão Financeira</li> <li>Administração Pública</li> <li>História</li> <li>Intercultural Indígena</li> <li>Jornalismo</li> <li>Letras - Português</li> <li>Letras - Português - Espanhol</li> <li>Letras - Português/Inglês</li> <li>Letras - Português/Literatura</li> <li>Música</li> <li>Matemática</li> <li>Medicina</li> <li>Medicina Veterinária</li> <li>Nutrição</li> <li>Odontologia</li> <li>Pedagogia</li> <li>Processos Gerenciais</li> <li>Psicologia</li> <li>Química</li> <li>Redes de Computadores</li> <li>Saneamento Ambiental</li> <li>Serviço Social</li> <li>Sistemas de Informação</li> <li>Turismo</li> <li>Zootecnia</li> </ul> ";
	document.getElementById('facu20').className ="visivel";
	clicou++;
	if(clicou== 2){
			document.getElementById('facu20').className ="invisivel";
			clicou=0;
		}
	break;

	case 11:
	facu21.innerHTML= " <ul> <li>Administração</li> <li>Análise e Desenvolvimento de Sistemas</li> <li>Arquitetura e Urbanismo</li> <li>Ciências Agrárias</li> <li>Ciências Biológicas</li> <li>Ciências Contábeis</li> <li>Ciências da Computação</li> <li>Design de Interiores</li> <li>Direito</li> <li>Educação Física</li> <li>Enfermagem</li> <li>Engenharia Ambiental</li> <li>Engenharia Civil</li> <li>Engenharia de Computação</li> <li>Engenharia Elétrica</li> <li>Estética e Cosmética</li> <li>Farmácia</li> <li>Fisioterapia</li> <li>Gastronomia</li> <li>Jornalismo</li> <li>Letras</li> <li>Matemática</li> <li>Medicina</li> <li>Medicina Veterinária</li> <li>Moda - Design</li> <li>Nutrição</li> <li>Odontologia</li> <li>Pedagogia</li> <li>Produção Multimídia</li> <li>Psicologia</li> <li>Publicidade e Propaganda</li> <li>Redes de Computadores</li> <li>Relações Internacionais</li> <li>Serviço Social</li> </ul> ";
	document.getElementById('facu21').className ="visivel";
	clicou++;
	if(clicou== 2){
			document.getElementById('facu21').className ="invisivel";
			clicou=0;
		}
	break;

	case 12:
	facu22.innerHTML= " <ul> <li>Administração</li> <li>Arquitetura e Urbanismo</li> <li>Biomedicina</li> <li>Ciências Agrárias</li> <li>Ciências Contábeis</li> <li>Design de Interiores</li> <li>Direito</li> <li>Educação Física</li> <li>Enfermagem</li> <li>Engenharia Civil</li> <li>Engenharia de Software</li> <li>Engenharia Mecânica</li> <li>Estética e Cosmética</li> <li>Farmácia</li> <li>Fisioterapia</li> <li>Gastronomia</li> <li>Medicina Veterinária</li> <li>Nutrição</li> <li>Odontologia</li> <li>Pedagogia</li> <li>Produção Agrícola</li> <li>Psicologia</li> <li>Publicidade e Propaganda</li> <li>Radiologia</li> </ul> ";
	document.getElementById('facu22').className ="visivel";
	clicou++;
	if(clicou== 2){
			document.getElementById('facu22').className ="invisivel";
			clicou=0;
		}

	break;

	}
}
