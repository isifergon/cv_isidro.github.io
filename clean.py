with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = False

i = 0
while i < len(lines):
    line = lines[i]
    
    # 1. Delete first Herramientas & Aplicacion (lines 75-162)
    if '<section id="herramientas" class="section">' in line:
        skip = True
    if skip and '<!-- Experience -->' in line:
        skip = False
        new_lines.append(line)
        i += 1
        continue
        
    # 2. Delete Evolucion (lines 196-260)
    if '<!-- Evolution -->' in line:
        skip = True
    if skip and '<!-- Tipo de Alumnado -->' in line:
        skip = False
        new_lines.append(line)
        i += 1
        continue
        
    # 3. Formación -> Qué puedo impartir
    if '<h2 class="section-title">Formación que imparto</h2>' in line:
        line = line.replace('Formación que imparto', 'Qué puedo impartir')

    # 4. Metodologia: keep only first 3 cards.
    if '<div class="methodology-card reveal">' in line and lines[i+1].find('<div class="methodology-number">04</div>') != -1:
        skip = True
    
    if skip and '<!-- Resultados -->' in line:
        skip = False
        new_lines.append('      </div>\n    </div>\n  </section>\n\n')
        new_lines.append(line)
        i += 1
        continue
        
    # 5. Delete Casos reales
    if '<div class="results-cases">' in line:
        skip = True
    if skip and '<!-- Herramientas -->' in line:
        skip = False
        new_lines.append('    </div>\n  </section>\n\n')
        new_lines.append(line)
        i += 1
        continue

    # 6. Delete Herramientas (second one)
    if '<!-- Herramientas -->' in line:
        skip = True
    if skip and '<!-- Proyectos como Casos de Aprendizaje -->' in line:
        skip = False
        new_lines.append(line)
        i += 1
        continue
        
    # 7. Delete Proyectos
    if '<!-- Proyectos como Casos de Aprendizaje -->' in line:
        skip = True
    if skip and '<!-- Gallery -->' in line:
        skip = False
        new_lines.append(line)
        i += 1
        continue

    if not skip:
        new_lines.append(line)
    
    i += 1

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
