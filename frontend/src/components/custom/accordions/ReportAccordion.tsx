import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export default function ReportAccordion() {
    return (
        <Accordion type="multiple" className="w-full border-2 p-1 border-secondary">
            <AccordionItem value="item-1">
                <AccordionTrigger>Tanzânia Pastagem</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Opção fácil de digerir e tem uma boa densidade de folhas, caule grossos (porém pouco fibrosos) e bastante proteína.
                        Além disso, esse tipo de pasto apresenta boa resistência a pragas e produz muitas sementes, tornando-se bastante lucrativo para o produtor rural.
                        Outras opções: Colonião, Brachiaria.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Arroz irrigado Lavoura</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Produtividade esperada: 8.000 kg/ha;
                    </p>
                    <p>
                        A produtividade do arroz nesse sistema é 3 vezes maior que no sequeiro, mas o custo de implantação é maior. A implantação da lavoura depende de um
                        sistema de irrigação por inundação. Além disso, precisa de uma oferta abundante de água durante o desenvolvimento até próximo da colheita.
                        Outras opções: soja
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Eucalipto Silvicultura (floresta)</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Produtividade esperada: 5m³/ha/ano;
                    </p>
                    <p>
                        Essa árvore tem crescimento precoce. O reflorestamento de eucalipto é um dos favoritos dos produtores, pois o eucalipto de semente tem uma poda inicial
                        de 10 a 12 anos, sendo que para obter uma madeira mais densa entre 20 a 24 anos. Já o corte para o eucalipto clonado pode variar entre 5 a 7 anos.
                        Outras opções: teca, cedro rosa.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Plano de manejo</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        As vacas multíparas devem ser alocadas na área de Pecuária-Floresta, que proporciona conforto térmico com a sombras das árvores nos períodos de
                        gestação. Após o parto, as bezerras devem permanecer nessa área até atingir a maturidade sexual, quando serão transferidas para a área de pastagem
                        para a primeira estação de monta. As novilhas vazias devem ser transferidas para a área de Pecuária-Floresta para engorda enquanto as gestantes devem
                        permanecer na área de pastagem até o parto. As áreas de pastagem e lavoura devem se alternar a cada dois anos, evitando o empobrecimento do solo.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
