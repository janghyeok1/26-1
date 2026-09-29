library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity tb_Full_Adder is
end tb_Full_Adder;

architecture sim of tb_Full_Adder is
    signal A, B, Carry_In, Sum, Carry_Out : std_logic := '0';
begin
    uut: entity work.Full_Adder
        port map (A => A, B => B, Carry_In => Carry_In,
                  Sum => Sum, Carry_Out => Carry_Out);

    process
    begin
        A <= '0'; B <= '0'; Carry_In <= '0'; wait for 10 ns;
        A <= '0'; B <= '0'; Carry_In <= '1'; wait for 10 ns;
        A <= '0'; B <= '1'; Carry_In <= '0'; wait for 10 ns;
        A <= '0'; B <= '1'; Carry_In <= '1'; wait for 10 ns;
        A <= '1'; B <= '0'; Carry_In <= '0'; wait for 10 ns;
        A <= '1'; B <= '0'; Carry_In <= '1'; wait for 10 ns;
        A <= '1'; B <= '1'; Carry_In <= '0'; wait for 10 ns;
        A <= '1'; B <= '1'; Carry_In <= '1'; wait for 10 ns;
        wait;
    end process;
end sim;